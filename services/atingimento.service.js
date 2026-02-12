export class AtingimentoService {
  constructor(request, options = {}) {
    this.request = request;
    this.basePath = options.basePath || '/atingimentos';
  }

  async definir(payload) {
    const response = await this.request.post(this.basePath, {
      data: payload
    });

    return response;
  }
}
