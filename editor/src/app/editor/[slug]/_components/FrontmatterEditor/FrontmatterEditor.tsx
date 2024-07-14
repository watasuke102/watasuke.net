// watasuke.net > editor
// CopyRight (c) 2021-2024 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @Watasuke102
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './FrontmatterEditor.css';
import React from 'react';
import * as ArticleReducer from '../ArticleReducer';
import {TagEditor} from '../TagEditor';

interface Props {
  state: ArticleReducer.StateType;
  dispatcher: React.Dispatch<ArticleReducer.Action>;
}

export function FrontmatterEditor(props: Props): JSX.Element {
  return (
    <section>
      <div className={css.input}>
        <label>Title</label>
        <input
          type='text'
          value={props.state.title}
          onChange={e => props.dispatcher({type: 'title/update', data: e.target.value})}
          className={css.input_text}
        />
      </div>
      <TagEditor current_tags={props.state.tags} all_tags={props.state.all_tags} dispatcher={props.dispatcher} />
    </section>
  );
}
