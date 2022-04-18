import GC from '@grapecity/spread-sheets';
import { SpreadSheets } from '@grapecity/spread-sheets-react';
import { useCallback } from 'react';

// 日本語カルチャを設定します
GC.Spread.Common.CultureManager.culture('ja-jp');

const QuickStart = () => {
  const initSpread = useCallback((spread: GC.Spread.Sheets.Workbook) => {
    // eslint-disable-next-line no-console
    console.log(spread);
  }, []);

  return (
    <div className='spread-sheet'>
      <SpreadSheets
        // hostClass='spread-sheet'
        workbookInitialized={(spread) => initSpread(spread)}
      />
    </div>
  );
};

export default QuickStart;
