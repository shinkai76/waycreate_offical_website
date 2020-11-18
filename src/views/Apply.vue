<template>
    <div id="apply">
        <ApplyForm :dialogVisible="true"></ApplyForm>
    </div>
</template>

<script>
    import ApplyForm from '../components/ApplyForm'
    export default {
        name: "Apply",
        components: { ApplyForm },
    }
</script>
