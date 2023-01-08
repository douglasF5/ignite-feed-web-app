import { useContent } from '../../utils/ContentContext';
import s from './styles.module.css';
import * as AlertDialog from '@radix-ui/react-alert-dialog';
import { Button } from '../Button';

export const DeleteDialog = () => {
  const { removeComment, setDeleteDialogData, deleteDialogData } = useContent();

  function handleDeleteComment() {
    removeComment(deleteDialogData?.postId, deleteDialogData?.commentId);
    setDeleteDialogData(null);
  }

  function handleCancelDeleteComment() {
    console.log("I'm about to be canceled!");
    setDeleteDialogData(null);
  }

  return (
    <AlertDialog.Root open={deleteDialogData !== null}>
      <AlertDialog.Portal>
        <AlertDialog.Overlay className={s.overlay} />
        <AlertDialog.Content className={s.contentBox}>
          <div className={s.slot1}>
            <AlertDialog.Title className={s.title}>Delete comment</AlertDialog.Title>
            <AlertDialog.Description className={s.description}>
              Are you sure you want to delete this comment?
            </AlertDialog.Description>
          </div>
          <div className={s.slot2}>
            <AlertDialog.Cancel asChild>
              <Button
                variantOptions={{
                  type: 'textNeutral',
                  label: 'L',
                  padding: 'L'
                }}
                onClick={handleCancelDeleteComment}
              >
                Cancel
              </Button>
            </AlertDialog.Cancel>
            <AlertDialog.Action asChild>
              <Button
                variantOptions={{
                  type: 'filledTonalNegative',
                  label: 'L',
                  padding: 'L'
                }}
                onClick={handleDeleteComment}
              >
                Yes, delete comment
              </Button>
            </AlertDialog.Action>
          </div>
        </AlertDialog.Content>
      </AlertDialog.Portal>
    </AlertDialog.Root>
  );
};
