<template>
    <Head>
        <title>Users</title>
    </Head>
    <h1>Users</h1>
    <div style="height: 500px;"></div>
    <div>
        <h3 style="margin: 30px;">The time is: {{ time }}</h3>
        <Link href="/users" as="button" preserve-scroll style="margin: 30px;">Refresh</Link>
    </div>
</template>
<script>
export default {
    props: {
        time: String
    }
}
</script>
