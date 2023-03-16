const getUsers = async (names) => {
    let jobs = [];

    for (let name of names) {
        let job = fetch(`https://api.github.com/users/${name}`)
            .then(
                response => {
                    if (response.status === 200) {
                        return response.json();
                    }
                },
            )
            .catch(error => {
                console.log(error);
            })

        jobs.push(job);
    }

    return await Promise.all(jobs);
};

let users = ['iliakan', 'remy', 'no.such.users'];
const data = getUsers(users);
console.log(data);
