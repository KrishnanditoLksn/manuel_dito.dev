export const swipeDown = (top) => {
    return (
        window.scrollTo({
            top: top,
            behavior: "smooth"
        })
    )
}