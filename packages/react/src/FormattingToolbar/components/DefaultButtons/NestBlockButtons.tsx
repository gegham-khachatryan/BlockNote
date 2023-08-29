import { formatKeyboardShortcut } from "../../../utils";
import { RiIndentDecrease, RiIndentIncrease } from "react-icons/ri";
import { ToolbarButton } from "../../../SharedComponents/Toolbar/components/ToolbarButton";
import { BlockNoteEditor, BlockSchema } from "@blocknote/core";
import { useCallback, useState } from "react";
import { useEditorSelectionChange } from "../../../hooks/useEditorSelectionChange";
import { useEditorContentChange } from "../../../hooks/useEditorContentChange";

export const NestBlockButton = <BSchema extends BlockSchema>(props: {
  editor: BlockNoteEditor<BSchema>;
}) => {
  const [canNestBlock, setCanNestBlock] = useState<boolean>();

  useEditorContentChange(props.editor, () => {
    setCanNestBlock(props.editor.canNestBlock());
  });

  useEditorSelectionChange(props.editor, () => {
    setCanNestBlock(props.editor.canNestBlock());
  });

  const nestBlock = useCallback(() => {
    props.editor.focus();
    props.editor.nestBlock();
  }, [props.editor]);

  return (
    <ToolbarButton
      onClick={nestBlock}
      isDisabled={!canNestBlock}
      mainTooltip="Nest Block"
      secondaryTooltip={formatKeyboardShortcut("Tab")}
      icon={RiIndentIncrease}
    />
  );
};

export const UnnestBlockButton = <BSchema extends BlockSchema>(props: {
  editor: BlockNoteEditor<BSchema>;
}) => {
  const [canUnnestBlock, setCanUnnestBlock] = useState<boolean>();

  useEditorContentChange(props.editor, () => {
    setCanUnnestBlock(props.editor.canUnnestBlock());
  });

  useEditorSelectionChange(props.editor, () => {
    setCanUnnestBlock(props.editor.canUnnestBlock());
  });

  const unnestBlock = useCallback(() => {
    props.editor.focus();
    props.editor.unnestBlock();
  }, [props]);

  return (
    <ToolbarButton
      onClick={unnestBlock}
      isDisabled={!canUnnestBlock}
      mainTooltip="Unnest Block"
      secondaryTooltip={formatKeyboardShortcut("Shift+Tab")}
      icon={RiIndentDecrease}
    />
  );
};
