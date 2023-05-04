function ProfileForm() {
    return (
        <form className=" w-[95%] max-w-[25rem] my-12 mx-auto">
            <div className="mb-2">
                <label
                    htmlFor="new-password"
                    className=" font-bold mb-2 text-[#353336] block"
                >
                    新密码
                </label>
                <input
                    type="password"
                    id="new-password"
                    className=" block inherit-font w-full rounded-[4px] border border-solid border-[#38015c] p-1 bg-[#f7f0fa]"
                />
            </div>
            <div className="mb-2">
                <label
                    htmlFor="old-password"
                    className=" font-bold mb-2 text-[#353336] block"
                >
                    旧密码
                </label>
                <input
                    type="password"
                    id="old-password"
                    className=" block inherit-font w-full rounded-[4px] border border-solid border-[#38015c] p-1 bg-[#f7f0fa]"
                />
            </div>
            <div className="mt-6">
                <button className="inherit-font cursor-pointer py-2 px-6 rounded-[4px] bg-[#38015c] text-white border border-solid border-[#38015c] hover:bg-[#540d83] hover:border-[#540d83]">
                    修改密码
                </button>
            </div>
        </form>
    )
}

export default ProfileForm
