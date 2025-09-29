import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { register as registerApi, type RegisterRequest } from '@/lib/api';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

type FormValues = RegisterRequest;

const Register = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({
    defaultValues: {
      email: '',
      phone_number: '',
      first_name: '',
      last_name: '',
      password: ''
    }
  });

  const onSubmit = async (values: FormValues) => {
    const result = await registerApi(values);
    if (!result.success) {
      toast.error(result.message || 'Registration failed');
      return;
    }
    toast.success('Account created successfully');
    navigate('/login');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background">
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 hero-gradient" />
        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=2068&auto=format&fit=crop"
          alt="Register"
          className="h-full w-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
          <h2 className="text-4xl font-bold drop-shadow">Join the Yatra</h2>
          <p className="mt-2 max-w-md drop-shadow">Create your account to explore hotels, guides, and sacred places.</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md bg-card shadow-medium rounded-lg p-6 sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 w-12 h-12 primary-gradient rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-xl">YT</span>
            </div>
            <h1 className="text-2xl font-bold">Create account</h1>
            <p className="text-sm text-muted-foreground">Start your spiritual journey</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first_name">First name</Label>
                <Input id="first_name" placeholder="John" {...register('first_name', { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last_name">Last name</Label>
                <Input id="last_name" placeholder="Doe" {...register('last_name', { required: true })} />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register('email', { required: true })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone_number">Phone number</Label>
              <Input id="phone_number" type="tel" placeholder="9876543210" {...register('phone_number', { required: true })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" {...register('password', { required: true })} />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Creating account...' : 'Register'}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Already have an account? <Link to="/login" className="text-secondary hover:underline">Login</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;


