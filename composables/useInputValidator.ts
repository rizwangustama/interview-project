import { ref } from 'vue';

export function useInputValidator(type: 'text' | 'number') {
    const errorMessage = ref('');
    const validate = (value: string) => {
        errorMessage.value = '';
        if (type === 'number') {
            const regex = /^[0-9]*$/;
            if (!regex.test(value)) {
                errorMessage.value = 'Only numbers are allowed. Please remove any letters or special characters.';
            }
        } else if (type === 'text') {
            const regex = /^[a-zA-Z]*$/;
            if (!regex.test(value)) {
                errorMessage.value = 'Only letters are allowed. Please remove any numbers or special characters.';
            }
        } else if(type === 'email') {
            const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if (!regex.test(value)) {
                errorMessage.value = 'Only Email Are Allow, Please enter valid email address.';
            }
        }
    };
    return {
        errorMessage,
        validate,
    };
}
