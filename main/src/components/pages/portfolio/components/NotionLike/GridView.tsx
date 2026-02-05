// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import * as css from './GridView.css';
import {SelectItem} from './SelectItem';

interface Props<T> {
  group_color: Record<string, string /*color code*/>;
  items: Record<string, T[]>;
  renderer: (props: {group: string; item: T; index: number}) => React.ReactNode;
}

export function GridView<T>(props: Props<T>) {
  return (
    <div className={css.container}>
      {Object.entries(props.items).map(([group, item], i) => (
        <details
          open
          key={`gridview-${group}-${i}`}
          className={css.category_section}
        >
          <summary style={{marginBottom: 8}}>
            <SelectItem color={props.group_color[group]} label={group} />
          </summary>
          <div key={group} className={css.grid_view}>
            {item.map((item, index) => props.renderer({group, item, index}))}
          </div>
        </details>
      ))}
    </div>
  );
}
