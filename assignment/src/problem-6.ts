{
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const myProfile = {
        name: "X",
        age: 20,
        email: "x@gmail.com",
    };

    const updateProfile = (param1: Profile, param2: Partial<Profile>) => {
        return { ...param1, ...param2 };
    };

    console.log(updateProfile(myProfile, { age: 30 }));
}
