import { parseDataId } from "../../functions/parseDataId";
import { ExpressionInfo, FileStorage } from "@locator/shared";

export function getExpressionData(
  target: HTMLElement,
  fileData: FileStorage
): ExpressionInfo | null {
  if (target.dataset.locatorjsId) {
    const [, id] = parseDataId(target.dataset.locatorjsId);
    const expData = fileData.expressions[Number(id)];
    // 支持跳转文件，不需要到达指定行列
    return expData || {
      name: '',
      loc: {
        start: {
          line: 1,
          column: 1,
        },
        end: {
          line: 1,
          column: 1,
        },
      },
      wrappingComponentId: null
    }
  }
  return null;
}
