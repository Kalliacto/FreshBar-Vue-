<template>
    <label class="checkbox__label" :class="props.type === 'radio' ? 'radio' : 'checkbox'">
        <input
            :type="props.type"
            :value="props.value"
            :name="props.name"
            :label="props.label"
            :checked="props.checked"
            class="input"
            :class="props.type === 'radio' ? 'radio__input' : 'checkbox__input'"
        />
        {{ props.label }}
        <span class="make__upsale">(+{{ props.value }}&nbsp;p)</span>
    </label>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    type: String,
    checked: Boolean,
    label: String,
    name: String,
    value: Number,
});
</script>

<style scoped>
.checkbox__label {
    white-space: nowrap;
}
.checkbox {
    position: relative;
    display: block;
    padding-left: 32px;
    line-height: 24px;
}
.checkbox__input {
    position: absolute;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    margin-left: -32px;
    cursor: pointer;
}
.checkbox__input::before {
    content: '';
    position: absolute;
    inset: 0;
    display: block;
    background-color: #fff;
    border-radius: 2px;
}
.checkbox__input::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 12px;
    height: 15px;
    background-image: url('../../assets/img/check.svg');
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}
.radio {
    position: relative;
    display: block;
    padding-left: 32px;
    line-height: 24px;
}
.radio__input {
    position: absolute;
    -moz-appearance: none;
    -webkit-appearance: none;
    appearance: none;
    width: 24px;
    height: 24px;
    margin-left: -32px;
    cursor: pointer;
    border-radius: 50%;
}
.radio__input::before {
    content: '';
    position: absolute;
    inset: 0;
    display: block;
    background-color: #fff;
    border-radius: 50%;
}
.radio__input::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 8px;
    height: 8px;
    background-image: url('../../assets/img/Ellipse.svg');
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
}

.checkbox__input:hover:before,
.checkbox__input:focus::before,
.radio__input::after,
.radio__input::before {
    background-color: var(--second-gray);
}

.checkbox__input:checked::after,
.radio__input:checked::after {
    opacity: 1;
}
.checkbox__input:focus,
.radio__input:focus {
    border: 1px solid var(--stroke);
}

.make__upsale,
.make__total-size {
    color: var(--stroke);
    font-size: 12px;
}
</style>
