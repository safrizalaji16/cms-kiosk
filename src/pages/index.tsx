// ? This route will be intended as initial redirector.
export async function getServerSideProps() {
  return {
    redirect: {
      permanent: true,
      destination: "/dashboard",
    },
  };
}

export default function Redirect() {}
