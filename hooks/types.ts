export type Response<T = undefined> = {
	msg: "error" | "success";
	data: T;
};