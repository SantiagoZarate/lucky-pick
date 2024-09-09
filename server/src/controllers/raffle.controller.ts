import { Request, Response } from 'express';
import raffleRepository from '../repository/raffle.repository';

async function getAll(req: Request, res: Response) {
  const results = await raffleRepository.getAll();
  res.json({
    ok: true,
    results,
  });
}

async function getOne(req: Request, res: Response) {
  const results = await raffleRepository.getOne(req.params.id!);
  res.json({
    ok: true,
    results,
  });
}

async function create(req: Request, res: Response) {
  console.log(req.body);
  const results = await raffleRepository.create(req.body);
  res.json({
    message: 'Raffle succesfully created',
    ok: true,
    results,
  });
}

export default {
  getAll,
  getOne,
  create,
};
