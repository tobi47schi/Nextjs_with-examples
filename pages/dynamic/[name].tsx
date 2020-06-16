import {useRouter} from 'next/router';
import { Header } from '../../components/header';

export const Dynamic = () => {
    const router = useRouter();
    const {name} = router.query;

    return (
        <div>
            <Header title="1 titel"></Header>
            Der Name ist {name}
        </div>
    )
}

export default Dynamic;