export type ApiResponse<T> = {
    success: boolean;
    message?: string;
    data?: T;
};

const defaultHeaders: HeadersInit = {
    "Content-Type": "application/json",
};

async function request<T>(url: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    let BASE_URL = 'http://localhost:3000';
    const response = await fetch(`${BASE_URL}${url}`, {
        ...options,
        headers: {
            ...defaultHeaders,
            ...(options.headers || {}),
        },
    });

    const contentType = response.headers.get("content-type");
    const isJson = contentType && contentType.includes("application/json");
    const payload = isJson ? await response.json() : await response.text();

    if (!response.ok) {
        const message = (payload && (payload.message || payload.error)) || response.statusText;
        return { success: false, message };
    }

    return {
        success: true,
        data: (payload as T) ?? undefined,
    };
}

// Auth APIs
export type LoginRequest = { email: string; password: string };
export type LoginResponse = { token?: string } & Record<string, unknown>;

export async function login(body: LoginRequest) {
    return request<LoginResponse>("/login", {
        method: "POST",
        body: JSON.stringify(body),
    });
}

export type RegisterRequest = {
    email: string;
    phone_number: string;
    first_name: string;
    last_name: string;
    password: string;
};
export type RegisterResponse = Record<string, unknown>;

export async function register(body: RegisterRequest) {
    return request<RegisterResponse>("/register", {
        method: "POST",
        body: JSON.stringify(body),
    });
}

export type ResetPasswordMailRequest = { email: string };
export type ResetPasswordMailResponse = Record<string, unknown>;

export async function resetPasswordMail(body: ResetPasswordMailRequest) {
    return request<ResetPasswordMailResponse>("/reset-password", {
        method: "POST",
        body: JSON.stringify(body),
    });
}

export type VerifyOtpRequest = { email: string; otp: string };
export type VerifyOtpResponse = Record<string, unknown>;

export async function verifyOtp(body: VerifyOtpRequest) {
    return request<VerifyOtpResponse>("/verify-otp", {
        method: "POST",
        body: JSON.stringify(body),
    });
}

export type ChangePasswordRequest = {
    email: string;
    otp: string;
    old_password: string;
    new_password: string;
};
export type ChangePasswordResponse = Record<string, unknown>;

export async function changePassword(body: ChangePasswordRequest) {
    return request<ChangePasswordResponse>("/change-password", {
        method: "POST",
        body: JSON.stringify(body),
    });
}


