export const DeleteCart = () => {
    for (let i = 1; i <2; i++)
{
        fetch(`https://muffi-server.herokuapp.com/cartInfo/10`, {
            method: "DELETE",
            headers:{"Content-type":"application/json"}
    })
}
}