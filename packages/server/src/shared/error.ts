import { TRPC_ERROR_CODE_KEY } from '@trpc/server/rpc';

export class APIError extends Error {
  readonly status: TRPC_ERROR_CODE_KEY;
  constructor(message: string, status: TRPC_ERROR_CODE_KEY = 'INTERNAL_SERVER_ERROR') {
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
