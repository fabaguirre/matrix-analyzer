import { buildPath } from '@/utils/api';

export const processMatrix = async ({
  matrix,
}: {
  matrix: Matrix;
}): Promise<MatrixResponseData> => {
  const response = await fetch(buildPath('matrix/rotate'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ matrix }),
  });
  const responseData = (await response.json()) as MatrixResponse;
  return responseData.data;
};
