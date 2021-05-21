import { GetServerSideProps } from "next";
import dynamic from 'next/dynamic'

export const getServerSideProps:GetServerSideProps = async ({query}) => {
    return {
        props: {
            products:[] 
        }
    }
}
const hello = (props:any) => {
    return <div>innnnn
    </div>
}

export default hello;