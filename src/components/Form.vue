<template>
  <div class="form-wrapper container">
    <form @submit.prevent="submitForm()">
      <div class="name">
        <div class="col-1">
          <label for="name">Nome<span>*</span></label>
        </div>
        <div class="col-2">
          <input
            type="text"
            id="name"
            name="name"
            v-model="form.name"
            @input="touchAndValidateInput('nome', 'name')">
          <small class="feedback-error">{{ formValidationMessages.name }}</small>
        </div>
      </div>

      <div class="email">
        <div class="col-1">
          <label for="email">E-mail<span>*</span></label>
        </div>
        <div class="col-2">
          <input
            type="email"
            id="email"
            name="email"
            v-model="form.email"
            @input="touchAndValidateInput('e-mail', 'email')">
          <small class="feedback-error">{{ formValidationMessages.email }}</small>
        </div>
      </div>

      <div class="subject">
        <div class="col-1">
          <label for="subject">Mensagem<span>*</span></label>
        </div>
        <div class="col-2">
          <textarea
            name="subject"
            id="subject"
            style="heigth: 400px;"
            v-model="form.message"
            @input="touchAndValidateInput('mensagem', 'message')">
          </textarea>
          <small class="feedback-error">{{ formValidationMessages.message }}</small>
        </div>
      </div>

      <div class="button">
        <button type="submit" :disabled="loading || $v.$invalid">ENVIAR</button>
        <Spinner class="margin-right" :loading="loading" />
      </div>
    </form>

    <Modal :show="modal.error || modal.success" @close="closeModal()">
      <p>{{ modal.message }}</p>
    </Modal>
  </div>
</template>

<script>
import { required, email, maxLength } from 'vuelidate/lib/validators';
import axios from '@/axios';
import Modal from '@/components/Modal.vue';
import validationMessages from '@/helpers/validationMessages';
import Spinner from '@/components/Spinner.vue';

export default {
  components: {
    Modal,
    Spinner,
  },
  data() {
    return {
      form: {
        name: '',
        email: '',
        message: '',
      },
      formValidationMessages: {
        name: '',
        email: '',
        message: '',
      },
      loading: false,
      modal: {
        success: false,
        error: false,
        message: '',
      },
      validationMessages,
      backEndValidationMessages: {},
    };
  },
  methods: {
    submitForm() {
      this.$v.$touch();

      if (this.$v.$invalid) {
        return;
      }

      this.loading = true;

      axios
        .post('/messages', this.form)
        .then((response) => {
          this.loading = false;
          this.modal.success = true;
          this.modal.message = 'Sua mensagem foi enviada com sucesso!';
          this.resetForm();
        })
        .catch(error => this.onHttpRequestError(error));
    },
    onHttpRequestError(error) {
      this.loading = false;

      switch (error.response.status) {
        case 422:
        {
          const { errors } = error.response.data;

          Object.keys(errors).forEach((key) => {
            const messages = errors[key].join(' ');
            this.formValidationMessages[key] = messages;
            this.backEndValidationMessages[key] = messages;
          });
          break;
        }
        default:
          this.modal.error = true;
          this.modal.message = 'Opa! Algo deu errado.';
      }
    },
    onModalClose() {
      this.modal.message = '';
      this.modal.error = false;
      this.modal.success = false;
    },
    resetForm() {
      this.$v.$reset();
      this.form.name = '';
      this.form.email = '';
      this.form.message = '';
    },
    touchAndValidateInput(attributeName, key) {
      this.$v.form[key].$touch();
      this.$delete(this.backEndValidationMessages, key);
      this.formValidationMessages[key] = this.validationMessages.getMessageFor(
        attributeName,
        key,
        this.$v.form[key],
        this.backEndValidationMessages,
      );
    },
    closeModal() {
      this.modal.error = false;
      this.modal.success = false;
      this.modal.message = '';
    },
  },
  validations: {
    form: {
      name: { required, maxLength: maxLength(100) },
      email: { required, email, maxLength: maxLength(100) },
      message: { required, maxLength: maxLength(3000) },
    },
  },
};
</script>

<style lang="scss" scoped>
.form-wrapper {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.name {
  display: flex;
  flex-direction: column;
}

.email {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

.col-2 {
  width: 80%;
}

.subject {
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
}

span {
  color: red;
}

input[type=text], input[type=email], select, textarea {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  background:rgb(211, 202, 202);
  border: 3px solid transparent;
  outline: none;

  &:focus {
    background: #e0dbdb;
    border: 3px solid #fd8cd7;
  }
}

label {
  padding: 10px 0;
  display: inline-block;
  color: rgb(190, 187, 187);
}

textarea{
  height: 100px;
}

button {
  color: #fff;
  background: rgb(217, 139, 253);
  border: 3px solid transparent;
  border-radius: 0 3px 3px 0;
  padding: 12px 20px;
  border: nome;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  z-index: 200;

  &:hover:not(:disabled) {
    background: transparent;
    border: 3px solid white;
  }

  &:disabled {
    cursor: default;
  }
}

.button {
  display: flex;
  align-items: center;
  align-content: center;
  margin-top: 1rem;
  margin-bottom: 2rem;
}

.feedback-error {
  color: red;
}

.margin-right {
  margin-left: 3rem;
}

        @media (min-width: 768px) {
          .container {
            padding-right: 0;
          }
        }
</style>
