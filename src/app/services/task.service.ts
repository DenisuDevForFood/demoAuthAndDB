import {Task} from '../shared/task.model';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {map} from 'rxjs/operators';

@Injectable()
export class TaskService {
  taskCollection: AngularFirestoreCollection<Task>;
  taskDocument: AngularFirestoreDocument<Task>;
  items: Observable<Task[]>;

  constructor(private afs: AngularFirestore) {
    // this.items = this.afs.collection('tasks').valueChanges();
    this.taskCollection = this.afs.collection('tasks', ref => ref.orderBy('name', 'asc'));
    this.items = this.taskCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Task;
        const id = a.payload.doc.id;
        return {id, ...data};
      }))
    );

  }


  getObservableTask() {
    return this.items;
  }

  addItem(task: {name: string, description: string}) {
    this.taskCollection.add(task);
  }

  deleteItem(item: Task) {
    this.taskDocument = this.afs.doc(`tasks/${item.id}`);
    this.taskDocument.delete();
  }

  updateItem(item: Task) {
    this.taskDocument = this.afs.doc(`tasks/${item.id}`);
    this.taskDocument.update(item);
  }
}
