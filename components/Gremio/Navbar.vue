<template>
    <div class="flex p-4 text-white shadow" :class="bgClass">
        <slot></slot>
    </div>
</template>

<script>
    
    export default {
        name: 'navbar',
        props: ['bgClass']
    }
</script>