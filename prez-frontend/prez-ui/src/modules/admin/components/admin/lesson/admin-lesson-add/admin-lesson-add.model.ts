export interface AdminLessonAdd{
    description: string;
    start_at: Date;
    end_at: Date;
    class_uid: number;
    professor_uid: number;
}
