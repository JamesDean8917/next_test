import { GetServerSideProps, GetStaticProps } from "next"


// export const getServerSideProps:GetServerSideProps = async ({}) => {
//     console.log("hi");
//     //const products = await fetch("//")
//     return {
//         props: {
//             products: []
//         }
//     }
// }
export const getStaticProps:GetStaticProps = async () => {
    return {
        props: {
            hello:"hello"
        }
    }
}
const hello = (props:any) => {
    console.log({props});
    return <div>hello</div>
}

export default hello;