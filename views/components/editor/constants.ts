import { DraftBlockType } from 'draft-js';
import { IconType } from 'react-icons';
import {
  BsTypeBold,
  BsTypeItalic,
  BsTypeUnderline,
  BsTypeStrikethrough,
  BsTypeH1,
  BsTypeH2,
  BsTypeH3,
} from 'react-icons/bs';
import { AiOutlineUnorderedList, AiOutlineOrderedList } from 'react-icons/ai';

export const EDITOR_KEY = 'myeditor';
export const ATOMIC_BLOCK_TYPE = 'atomic';

//https:react-icons.github.io/react-icons
export const INLINE_STYLES: { iconType: IconType; style: string }[] = [
  { iconType: BsTypeBold, style: 'BOLD' },
  { iconType: BsTypeItalic, style: 'ITALIC' },
  { iconType: BsTypeUnderline, style: 'UNDERLINE' },
  { iconType: BsTypeStrikethrough, style: 'STRIKETHROUGH' },
];

export const BLOCK_STYLES: { iconType: IconType; style: DraftBlockType }[] = [
  { iconType: BsTypeH1, style: 'header-one' },
  { iconType: BsTypeH2, style: 'header-two' },
  { iconType: BsTypeH3, style: 'header-three' },
  { iconType: AiOutlineUnorderedList, style: 'unordered-list-item' },
  { iconType: AiOutlineOrderedList, style: 'ordered-list-item' },
];
