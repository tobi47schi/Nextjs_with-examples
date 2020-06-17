import {useRouter} from 'next/router';

export const Dynamic = () => {
    const router = useRouter();
    const {name} = router.query;

    return (
        <div>
            Der Name ist {name}
        </div>
    )
}

export default Dynamic;