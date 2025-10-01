import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { authService } from '@/lib/auth';
import { createBooking, createInquiry } from '@/lib/api';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

interface BookingDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  type: 'booking' | 'inquiry';
  serviceType: 'hotel' | 'guide' | 'vehicle' | 'temple';
  serviceId: string;
  serviceName: string;
  additionalInfo?: string; // For room type, guide specialization, vehicle model, etc.
}

interface FormValues {
  name: string;
  email: string;
  phone_number: string;
  total_persons: number;
  message: string;
}

export function BookingDialog({
  open,
  onOpenChange,
  type,
  serviceType,
  serviceId,
  serviceName,
  additionalInfo,
}: BookingDialogProps) {
  const user = authService.getUser();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormValues>({
    defaultValues: {
      name: user?.name || '',
      email: user?.email || '',
      phone_number: '',
      total_persons: 1,
      message: '',
    }
  });

  useEffect(() => {
    if (open && user) {
      reset({
        name: user.name,
        email: user.email,
        phone_number: '',
        total_persons: 1,
        message: '',
      });
    }
  }, [open, user, reset]);

  const onSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    // Combine message with additional info
    let fullMessage = values.message || '';
    if (additionalInfo) {
      fullMessage = additionalInfo + (fullMessage ? `\n\nAdditional Notes: ${fullMessage}` : '');
    }
    
    const requestData = {
      ...values,
      message: fullMessage,
      service_type: serviceType,
      service_id: serviceId,
    };

    try {
      const result = type === 'booking' 
        ? await createBooking(requestData)
        : await createInquiry(requestData);

      if (!result.success) {
        toast.error(result.message || `${type === 'booking' ? 'Booking' : 'Inquiry'} failed`);
        return;
      }

      toast.success(
        type === 'booking'
          ? 'Booking request submitted! We will coordinate shortly for the price and room details.'
          : 'Inquiry submitted successfully! We will contact you shortly.'
      );
      
      onOpenChange(false);
      reset();
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>
            {type === 'booking' ? 'Book Now' : 'Send Inquiry'}
          </DialogTitle>
          <DialogDescription>
            {type === 'booking' 
              ? `Complete your booking for ${serviceName}. We'll coordinate shortly for price and details.`
              : `Send an inquiry about ${serviceName}. We'll get back to you soon.`
            }
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Full Name *</Label>
            <Input
              id="name"
              placeholder="Enter your full name"
              {...register('name', { required: 'Name is required' })}
            />
            {errors.name && (
              <p className="text-sm text-destructive">{errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              placeholder="your.email@example.com"
              {...register('email', {
                required: 'Email is required',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: 'Invalid email address',
                },
              })}
            />
            {errors.email && (
              <p className="text-sm text-destructive">{errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone_number">Phone Number *</Label>
            <Input
              id="phone_number"
              type="tel"
              placeholder="+91 98765 43210"
              {...register('phone_number', {
                required: 'Phone number is required',
                pattern: {
                  value: /^[+]?[(]?[0-9]{1,4}[)]?[-\s.]?[(]?[0-9]{1,4}[)]?[-\s.]?[0-9]{1,9}$/,
                  message: 'Invalid phone number',
                },
              })}
            />
            {errors.phone_number && (
              <p className="text-sm text-destructive">{errors.phone_number.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="total_persons">Total Persons *</Label>
            <Input
              id="total_persons"
              type="number"
              min="1"
              placeholder="1"
              {...register('total_persons', {
                required: 'Number of persons is required',
                min: { value: 1, message: 'At least 1 person required' },
                valueAsNumber: true,
              })}
            />
            {errors.total_persons && (
              <p className="text-sm text-destructive">{errors.total_persons.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <Textarea
              id="message"
              placeholder="Any special requests or questions..."
              rows={3}
              {...register('message')}
            />
          </div>

          <div className="flex gap-3 pt-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="default"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit'
              )}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}

