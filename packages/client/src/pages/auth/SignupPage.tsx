import {
  Button,
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
} from '@/components/ui';
import { toast } from '@/hooks/use-toast';
import { type RegisterSchema, registerSchema, trpc } from '@/lib/trpc';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

const defaultValues = {
  confirmPassword: '',
  email: '',
  password: '',
  username: '',
} satisfies RegisterSchema;

export function SignupPage() {
  const redirect = useNavigate();
  const form = useForm<RegisterSchema>({
    resolver: zodResolver(registerSchema),
    defaultValues,
  });

  const registerMutation = trpc.auth.register.useMutation({
    onSuccess: () => {
      toast({
        title: 'Registered succesfully',
        description: 'Log in with your credentials',
      });
      redirect({ pathname: '/login' });
    },
  });

  const handleSubmit = (data: RegisterSchema) => {
    registerMutation.mutate(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(handleSubmit)}
        className="flex flex-col gap-4"
      >
        <FormField
          control={form.control}
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="Lionel messi" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="youremail@gmail.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm password</FormLabel>
              <FormControl>
                <Input placeholder="********" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button>Sign in</Button>
      </form>
    </Form>
  );
}
