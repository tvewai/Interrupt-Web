import * as api from "@/app/(main)/api";

export default {
  validationId(loginId: string) {
    return api.default.get({
      url: `/api/v1/members/check-login-id?loginId=${loginId}`,
    });
  },
};
