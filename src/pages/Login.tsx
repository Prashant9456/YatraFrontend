import React from 'react';
import { useForm } from 'react-hook-form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { login, type LoginRequest } from '@/lib/api';
import { toast } from 'sonner';
import { Link, useNavigate } from 'react-router-dom';

type FormValues = LoginRequest;

const Login = () => {
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { isSubmitting } } = useForm<FormValues>({
    defaultValues: { email: '', password: '' }
  });

  const onSubmit = async (values: FormValues) => {
    const result = await login(values);
    if (!result.success) {
      toast.error(result.message || 'Login failed');
      return;
    }
    toast.success('Logged in successfully');
    navigate('/');
  };

  return (
    <div className="min-h-screen grid grid-cols-1 lg:grid-cols-2 bg-background">
      <div className="hidden lg:block relative">
        <div className="absolute inset-0 hero-gradient" />
        <img
          src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=2068&auto=format&fit=crop"
          alt="Sacred travel"
          className="h-full w-full object-cover mix-blend-overlay"
        />
        <div className="absolute inset-0 p-10 flex flex-col justify-end text-white">
          <h2 className="text-4xl font-bold drop-shadow">Begin your sacred journey</h2>
          <p className="mt-2 max-w-md drop-shadow">Enter your account to book hotels, connect with guides, and explore temples.</p>
        </div>
      </div>

      <div className="flex items-center justify-center p-6 sm:p-10">
        <div className="w-full max-w-md bg-card shadow-medium rounded-lg p-6 sm:p-8">
          <div className="mb-6 text-center">
            <div className="mx-auto mb-3 w-12 h-12 primary-gradient rounded-lg flex items-center justify-center shadow-glow">
              <span className="text-primary-foreground font-bold text-xl">YT</span>
            </div>
            <h1 className="text-2xl font-bold">Welcome back</h1>
            <p className="text-sm text-muted-foreground">Sign in to continue your Yatra</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" placeholder="you@example.com" {...register('email', { required: true })} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="••••••••" {...register('password', { required: true })} />
            </div>
            <div className="flex items-center justify-between text-sm">
              <Link to="/reset-password" className="text-secondary hover:underline">Forgot password?</Link>
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? 'Signing in...' : 'Login'}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
              Don't have an account? <Link to="/register" className="text-secondary hover:underline">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;


