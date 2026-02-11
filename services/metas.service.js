export class MetasService {
  constructor(request) {
    this.request = request;
  }

  criar(payload) {
    return this.request.post('/metas', {
      data: payload
    });
  }

  listar() {
    return this.request.get('/metas');
  }

  editar(id, payload) {
    return this.request.put(`/metas/${id}`, {
      data: payload
    });
  }

  remover(id) {
    return this.request.delete(`/metas/${id}`);
  }
}