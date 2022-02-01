using Notes.DB;

namespace Notes.Core
{
    public class NotesServices : INotesServices
    {
        private AppDbContext _dbContext;
        public NotesServices(AppDbContext context)
        {
            _dbContext = context;
        }

        public Note CreateNote(Note note)
        {
            _dbContext.Add(note);
            _dbContext.SaveChanges();

            return note;
        }

        public Note GetNote(int id)
        {
            return _dbContext.Notes.First(n => n.Id == id);
        }

        public List<Note> GetNotes()
        {
            return _dbContext.Notes.ToList();
        }

        public void DeleteNote(int id)
        {
            var note = _dbContext.Notes.First(n => n.Id == id);
            _dbContext.Notes.Remove(note);
            _dbContext.SaveChanges();
        }

        public void EditNote(Note note)
        {
            var editedNote = _dbContext.Notes.First(n => n.Id == note.Id);
            editedNote.Value = note.Value;
            _dbContext.SaveChanges();
        }
    }
}