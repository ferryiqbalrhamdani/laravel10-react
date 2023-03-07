import NeswLists from '@/Components/Homepage/NewsLists';
import Paginator from '@/Components/Homepage/Paginator';
import Navbar from '@/Components/Navbar';
import { Head } from '@inertiajs/react';

export default function Homepage(props) {
    // console.log('data: ', props);
    return (
        <div className="min-h-screen bg-slate-50">
            <Head title={props.title} />
            <Navbar />
            <div className="flex justify-center flex-col lg:flex-row lg:flex-wrap lg:items-stretch  items-center gap-4 p-4">
                <NeswLists news={props.news.data} />
            </div>
            <div className="flex justify-center items-center">
                <Paginator meta={props.news.meta} />
            </div>
        </div>
    );
}