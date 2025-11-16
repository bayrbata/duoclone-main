import { LOGOUT } from "../../Constants/RequestConstants/paths.ts";
import { WideActionButton } from "../../Components/Atoms/Button/WideActionButton.tsx";
import { USE_MOCK_MODE } from "../../Utils/MockData/mockService.ts";

type LogoutButtonProps = {
  show?: boolean;
};

export function LogoutButton({ show }: LogoutButtonProps) {


  async function logout() {
    if (!USE_MOCK_MODE) {
    await fetch(LOGOUT, { method: "POST", credentials: "include" });
    }
    window.location.href = "/auth";
  }

  if (show)
    return (
      <div className="w-full px-4 py-2 flex items-end h-full">
        <WideActionButton
          activeColor="bg-duoBackground border border-duoGrayLocked active:shadow-none active:translate-y-[5px] shadow-duoGrayLockedCircleShadow"
          activeTextColor="text-duoRed/80"
          activeText="Sign Out"
          onSubmit={() => logout()}
          isActive={true}
          text="Sign Out"
        />
      </div>
    );
}
