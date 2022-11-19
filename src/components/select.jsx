import Form from 'react-bootstrap/Form';

function Select() {
  return (
    <Form.Select aria-label="Default select example">
      <option>Selecione uma lista de contatos</option>
      <option value="1">Clientes</option>
      <option value="2">Testes</option>
      <option value="3">indicação</option>
    </Form.Select>
  );
}

export default Select;
