
# **Lacrei Saúde - Backend**

## **Descrição**
Este é o backend do projeto **Lacrei Saúde**, desenvolvido com **Django** e **Django REST Framework (DRF)**. Ele inclui APIs para **Consultas** e **Profissionais**, com a documentação acessível via **Swagger UI**. Para testar a aplicação de localmente utilizando **HTTPS** confira:

---

## **Requisitos**

Confirme ter os seguintes softwares instalados:

- **Python 3.10+**: [Instalar Python](https://www.python.org/downloads/)
- **Poetry**: Gerenciador de dependências do Python  
  Instale com:
  ```bash
  curl -sSL https://install.python-poetry.org | python3 -
  ```
- **Git**: [Instalar Git](https://git-scm.com/downloads)
- **OpenSSL**: Para gerar certificados locais.

---

## **Dependências**

1. **Instalar as dependências**:
   ```bash
   poetry install
   ```

2. **Ativar o ambiente virtual**:
   ```bash
   poetry shell
   ```

---

## **Banco de Dados SQLite**

1. **Rodar as migrações**:
   ```bash
   poetry run python manage.py migrate
   ```

2. **(Opcional) Criar um superusuário**:
   ```bash
   poetry run python manage.py createsuperuser
   ```

---

## **Certificados para HTTPS**

1. **Gerar certificados autoassinados**:
   ```bash
   openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes
   ```

---

## **Rodar o Servidor com HTTPS**

Em ./backend/ execute o seguinte comando para rodar o servidor com **HTTPS**:

```bash
poetry run python manage.py runserver_plus --cert-file cert.pem --key-file key.pem
```

O servidor estará disponível em: [https://127.0.0.1:8000](https://127.0.0.1:8000)
A documentação Swagger redirecionada por padrão e disponível em: [https://127.0.0.1:8000/swagger/](https://127.0.0.1:8000/swagger/)

