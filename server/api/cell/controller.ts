import { cellUseCase } from '$/useCase/cellUseCase';
import { defineController } from './$relay';

export default defineController(() => ({
  get: async () => ({ status: 200, body: await cellUseCase.get() }),
  post: () => ({ status: 201, body: cellUseCase.init() }),
}));
