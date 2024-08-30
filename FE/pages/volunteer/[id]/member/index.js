import Member from "../../../../src/components/units/volunteer/member/Member.container";
import { checkAuth } from "../../../../src/components/commons/utils/auth";
import { fetchMember } from "../../../../src/components/units/volunteer/member/Member.queries";
import { useUser } from "../../../../src/components/commons/hooks/useRoleContext";

export default function MemberPage({ isSSRLoggedIn, memberData }) {
  const { userRole } = useUser();

  return (
    <>
      <Member 
      isSSRLoggedIn={isSSRLoggedIn} 
      userRole={userRole}
      memberData={memberData}
      />
    </>
  )
}

export async function getServerSideProps(context) {
  try {
    const { id } = context.params;

    console.log("getServerSideProps called for /volunteer/[id]/notices");
    const authResult = await checkAuth(context);
    console.log("authResult in /volunteer/[id]/notices:", authResult);
    const accessToken = context.req.cookies.accessToken;

    const { isSSRLoggedIn } = authResult.props;

    let memberData = null;

    if (isSSRLoggedIn && accessToken) {
      console.log(`Fetching volunteer members with auth for id: ${id}`);
      memberData = await fetchMember(id, accessToken);
    }

    return {
      props: {
        isSSRLoggedIn,
        memberData
      },
    };
  } catch (error) {
    console.error(
      `Error fetching volunteer mmebers in volunteer/[id]/member getServerSideProps: ${error.message}`
    );
    return {
      props: {
        isSSRLoggedIn: false,
        memberData: null,
        userRole: "visitor",
        error: "Failed fetch volunteer members"
      }
    }
  }
}