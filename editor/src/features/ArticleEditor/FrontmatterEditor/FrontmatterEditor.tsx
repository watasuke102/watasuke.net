// watasuke.net
// CopyRight (c) 2021-2026 watasuke
//
// Email  : <watasuke102@gmail.com>
// Twitter: @watasuke1024
// This software is released under the MIT or MIT SUSHI-WARE License.
import {css} from './FrontmatterEditor.css';
import React from 'react';
import {Checkbox} from '@common/Checkbox';
import * as ArticleReducer from '../ArticleReducer';
import {TagEditor} from '../TagEditor';

interface Props {
  state: ArticleReducer.StateType;
  dispatcher: React.Dispatch<ArticleReducer.Action>;
  tldr_placeholder: string;
}

export function FrontmatterEditor(props: Props) {
  const id = {
    title: 'frontmatter_editor_title',
    tldr: 'frontmatter_editor_tldr',
  };
  return (
    <section>
      <div className={css.input}>
        <label htmlFor={id.title}>Title</label>
        <input
          id={id.title}
          type='text'
          value={props.state.title}
          onChange={e =>
            props.dispatcher({type: 'title/update', data: e.target.value})
          }
          className={css.input_text}
        />
      </div>
      <div className={css.input}>
        <label htmlFor={id.tldr}>
          TL;DR
          <br />
          <span className={css.counter}>len: {props.state.tldr.length}</span>
        </label>
        <textarea
          id={id.tldr}
          placeholder={props.tldr_placeholder}
          value={props.state.tldr}
          onChange={e =>
            props.dispatcher({type: 'tldr/update', data: e.target.value})
          }
          className={css.input_text}
        />
      </div>
      <Checkbox
        checked={props.state.is_favorite}
        on_click={() => props.dispatcher({type: 'is_favorite/toggle'})}
        label='is favorite?'
      />
      <TagEditor
        current_tags={props.state.tags}
        all_tags={props.state.all_tags}
        dispatcher={props.dispatcher}
      />
    </section>
  );
}
