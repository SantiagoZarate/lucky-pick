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
import { useAuth } from '@/hooks/useAuth';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

const loginSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export type LoginSchema = z.infer<typeof loginSchema>;

export function LoginPage() {
  const { loginAction } = useAuth();

  const form = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      password: '',
      username: '',
    },
  });

  const onSubmit = (data: LoginSchema) => {
    console.log(data);
    form.reset();
    loginAction(data);
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
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
        <Button>Sign in</Button>
      </form>
    </Form>
  );
}
