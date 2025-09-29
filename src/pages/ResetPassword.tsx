import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { resetPasswordMail, verifyOtp, changePassword } from '@/lib/api';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

type EmailForm = { email: string };
type OtpForm = { email: string; otp: string };
type NewPassForm = { email: string; password: string; confirm: string };

const ResetPassword = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState<'email' | 'otp' | 'new'>('email');
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');

  const emailForm = useForm<EmailForm>({ defaultValues: { email: '' } });
  const otpForm = useForm<OtpForm>({ defaultValues: { email: '', otp: '' } });
  const newForm = useForm<NewPassForm>({ defaultValues: { email: '', password: '', confirm: '' } });

  const submitEmail = async (values: EmailForm) => {
    const res = await resetPasswordMail({ email: values.email });
    if (!res.success) {
      toast.error(res.message || 'Failed to send reset email');
      return;
    }
    setEmail(values.email);
    otpForm.reset({ email: values.email, otp: '' });
    setStep('otp');
    toast.success('OTP sent to your email');
  };

  const submitOtp = async (values: OtpForm) => {
    const res = await verifyOtp({ email, otp: values.otp });
    if (!res.success) {
      toast.error(res.message || 'Invalid OTP');
      return;
    }
    setOtp(values.otp);
    newForm.reset({ email, password: '', confirm: '' });
    setStep('new');
    toast.success('OTP verified');
  };

  const submitNew = async (values: NewPassForm) => {
    if (values.password !== values.confirm) {
      toast.error('Passwords do not match');
      return;
    }
    const res = await changePassword({ email, otp, old_password: '', new_password: values.password });
    if (!res.success) {
      toast.error(res.message || 'Failed to change password');
      return;
    }
    toast.success('Password updated');
    navigate('/login');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background">
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 hero-gradient" />
        <img
          src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&w=2068&auto=format&fit=crop"
          alt="Reset"
          className="h-full w-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
          <h2 className="text-4xl font-bold drop-shadow">Reset your password</h2>
          <p className="mt-2 max-w-md drop-shadow">We will send an OTP to your email to proceed.</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md bg-card shadow-medium rounded-lg p-6 sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 w-12 h-12 primary-gradient rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-xl">YT</span>
            </div>
            <h1 className="text-2xl font-bold">{step === 'email' ? 'Forgot password' : step === 'otp' ? 'Verify OTP' : 'Set new password'}</h1>
            <p className="text-sm text-muted-foreground">
              {step === 'email' && 'Enter your email to receive an OTP'}
              {step === 'otp' && 'Check your email and enter the OTP'}
              {step === 'new' && 'Create a strong new password'}
            </p>
          </div>

          {step === 'email' && (
            <form className="space-y-4" onSubmit={emailForm.handleSubmit(submitEmail)}>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" placeholder="you@example.com" {...emailForm.register('email', { required: true })} />
              </div>
              <Button type="submit" className="w-full" disabled={emailForm.formState.isSubmitting}>
                {emailForm.formState.isSubmitting ? 'Sending...' : 'Send OTP'}
              </Button>
            </form>
          )}

          {step === 'otp' && (
            <form className="space-y-4" onSubmit={otpForm.handleSubmit(submitOtp)}>
              <div className="space-y-2">
                <Label htmlFor="otp">Enter OTP</Label>
                <Input id="otp" placeholder="123456" {...otpForm.register('otp', { required: true })} />
              </div>
              <Button type="submit" className="w-full" disabled={otpForm.formState.isSubmitting}>
                {otpForm.formState.isSubmitting ? 'Verifying...' : 'Verify OTP'}
              </Button>
            </form>
          )}

          {step === 'new' && (
            <form className="space-y-4" onSubmit={newForm.handleSubmit(submitNew)}>
              <div className="space-y-2">
                <Label htmlFor="password">New password</Label>
                <Input id="password" type="password" placeholder="••••••••" {...newForm.register('password', { required: true })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm">Confirm password</Label>
                <Input id="confirm" type="password" placeholder="••••••••" {...newForm.register('confirm', { required: true })} />
              </div>
              <Button type="submit" className="w-full" disabled={newForm.formState.isSubmitting}>
                {newForm.formState.isSubmitting ? 'Saving...' : 'Set password'}
              </Button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;


