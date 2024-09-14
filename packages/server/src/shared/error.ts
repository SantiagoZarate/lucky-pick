import { TRPCError } from '@trpc/server';

export class APIError extends Error {
  readonly status: TRPCError['code'];
  constructor(message: string, status: TRPCError['code'] = 'INTERNAL_SERVER_ERROR') {
    super(message);
    this.status = status;
  }
}

export class AuthError extends APIError {
  constructor(message: string) {
    super(message, 'UNAUTHORIZED');
  }
}

export class NotFoundError extends APIError {
  constructor(message: string) {
    super(message, 'BAD_REQUEST');
  }
}
