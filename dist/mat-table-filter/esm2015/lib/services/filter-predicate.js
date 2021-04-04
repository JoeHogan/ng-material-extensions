import { MatTableFilter } from '../mat-table-filter.enum';
import * as LODASH from 'lodash-es';
export class FilterPredicate {
    executeCondition(itemPair, options) {
        this.handleLetterCasing(itemPair, options.caseSensitive);
        switch (options.filterType) {
            case MatTableFilter.EQUALS:
                return this.equals(itemPair);
            case MatTableFilter.ANYWHERE:
                return this.anywhere(itemPair);
            case MatTableFilter.STARTS_WITH:
                return this.startsWith(itemPair);
            case MatTableFilter.ENDS_WITH:
                return this.endsWith(itemPair);
            default:
                return true;
        }
    }
    handleLetterCasing(itemPair, caseSensitive) {
        if (!caseSensitive) {
            this.transformAllLowerCase(itemPair);
        }
    }
    transformAllLowerCase(object) {
        // tslint:disable-next-line:forin
        for (const key in object) {
            const value = object[key];
            if (LODASH.isString(value)) {
                object[key] = value.toLowerCase();
            }
            else {
                this.transformAllLowerCase(value);
            }
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyLXByZWRpY2F0ZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL21hdC10YWJsZS1maWx0ZXIvIiwic291cmNlcyI6WyJsaWIvc2VydmljZXMvZmlsdGVyLXByZWRpY2F0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFFMUQsT0FBTyxLQUFLLE1BQU0sTUFBTSxXQUFXLENBQUM7QUFHcEMsTUFBTSxPQUFnQixlQUFlO0lBTzVCLGdCQUFnQixDQUFDLFFBQXFCLEVBQUUsT0FBZ0I7UUFDN0QsSUFBSSxDQUFDLGtCQUFrQixDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDekQsUUFBUSxPQUFPLENBQUMsVUFBVSxFQUFFO1lBQzFCLEtBQUssY0FBYyxDQUFDLE1BQU07Z0JBQ3hCLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMvQixLQUFLLGNBQWMsQ0FBQyxRQUFRO2dCQUMxQixPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDakMsS0FBSyxjQUFjLENBQUMsV0FBVztnQkFDN0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1lBQ25DLEtBQUssY0FBYyxDQUFDLFNBQVM7Z0JBQzNCLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNqQztnQkFDRSxPQUFPLElBQUksQ0FBQztTQUNmO0lBQ0gsQ0FBQztJQUVPLGtCQUFrQixDQUFDLFFBQXVCLEVBQUUsYUFBc0I7UUFDeEUsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUNsQixJQUFJLENBQUMscUJBQXFCLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDdEM7SUFDSCxDQUFDO0lBRU8scUJBQXFCLENBQUMsTUFBVztRQUN2QyxpQ0FBaUM7UUFDakMsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUU7WUFDeEIsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksTUFBTSxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsRUFBRTtnQkFDMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUNuQztpQkFBTTtnQkFDTCxJQUFJLENBQUMscUJBQXFCLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkM7U0FDRjtJQUNILENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE1hdFRhYmxlRmlsdGVyIH0gZnJvbSAnLi4vbWF0LXRhYmxlLWZpbHRlci5lbnVtJztcclxuaW1wb3J0IHsgSXRlbVBhaXIgfSBmcm9tICcuLi9pdGVtLXBhaXInO1xyXG5pbXBvcnQgKiBhcyBMT0RBU0ggZnJvbSAnbG9kYXNoLWVzJztcclxuaW1wb3J0IHsgT3B0aW9ucyB9IGZyb20gJy4uL29wdGlvbnMnO1xyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEZpbHRlclByZWRpY2F0ZTxUPiB7XHJcblxyXG4gIHB1YmxpYyBhYnN0cmFjdCBlcXVhbHMoaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+KTogYm9vbGVhbjtcclxuICBwdWJsaWMgYWJzdHJhY3QgYW55d2hlcmUoaXRlbVBhaXI6IEl0ZW1QYWlyPFQ+KTogYm9vbGVhbjtcclxuICBwdWJsaWMgYWJzdHJhY3Qgc3RhcnRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xyXG4gIHB1YmxpYyBhYnN0cmFjdCBlbmRzV2l0aChpdGVtUGFpcjogSXRlbVBhaXI8VD4pOiBib29sZWFuO1xyXG5cclxuICBwdWJsaWMgZXhlY3V0ZUNvbmRpdGlvbihpdGVtUGFpcjogSXRlbVBhaXI8VD4sIG9wdGlvbnM6IE9wdGlvbnMpOiBib29sZWFuIHtcclxuICAgIHRoaXMuaGFuZGxlTGV0dGVyQ2FzaW5nKGl0ZW1QYWlyLCBvcHRpb25zLmNhc2VTZW5zaXRpdmUpO1xyXG4gICAgc3dpdGNoIChvcHRpb25zLmZpbHRlclR5cGUpIHtcclxuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5FUVVBTFM6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXF1YWxzKGl0ZW1QYWlyKTtcclxuICAgICAgY2FzZSBNYXRUYWJsZUZpbHRlci5BTllXSEVSRTpcclxuICAgICAgICByZXR1cm4gdGhpcy5hbnl3aGVyZShpdGVtUGFpcik7XHJcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuU1RBUlRTX1dJVEg6XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3RhcnRzV2l0aChpdGVtUGFpcik7XHJcbiAgICAgIGNhc2UgTWF0VGFibGVGaWx0ZXIuRU5EU19XSVRIOlxyXG4gICAgICAgIHJldHVybiB0aGlzLmVuZHNXaXRoKGl0ZW1QYWlyKTtcclxuICAgICAgZGVmYXVsdDpcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHByaXZhdGUgaGFuZGxlTGV0dGVyQ2FzaW5nKGl0ZW1QYWlyOiBJdGVtUGFpcjxhbnk+LCBjYXNlU2Vuc2l0aXZlOiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoIWNhc2VTZW5zaXRpdmUpIHtcclxuICAgICAgdGhpcy50cmFuc2Zvcm1BbGxMb3dlckNhc2UoaXRlbVBhaXIpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcHJpdmF0ZSB0cmFuc2Zvcm1BbGxMb3dlckNhc2Uob2JqZWN0OiBhbnkpIHtcclxuICAgIC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZTpmb3JpblxyXG4gICAgZm9yIChjb25zdCBrZXkgaW4gb2JqZWN0KSB7XHJcbiAgICAgIGNvbnN0IHZhbHVlID0gb2JqZWN0W2tleV07XHJcbiAgICAgIGlmIChMT0RBU0guaXNTdHJpbmcodmFsdWUpKSB7XHJcbiAgICAgICAgb2JqZWN0W2tleV0gPSB2YWx1ZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRoaXMudHJhbnNmb3JtQWxsTG93ZXJDYXNlKHZhbHVlKTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iXX0=