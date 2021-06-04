async function a() {
    console.log(d?.a)
    const b = await import('hello')
    console.log(b)
}
