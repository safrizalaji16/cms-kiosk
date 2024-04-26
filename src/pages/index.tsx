// ? This route will be intended as initial redirector.
export async function getServerSideProps() {
  return {
    redirect: {
      permanent: true,
      destination: "/devices",
    },
  };
}

export default function Redirect() {}
