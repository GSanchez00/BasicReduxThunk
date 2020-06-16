export const getAllUsers = async() => 
{
    try
    {
        const userResponse = await fetch("https://swapi.dev/api/people/")
        const users = await userResponse.json();
        return users;
    }
    catch(error)
    {
        return error;
    }
    /*
    return fetch('https://swapi.dev/api/people/')
    .then(response => {
        return response.json();
    }).catch(error => {
        return error;
    });
    */
}
