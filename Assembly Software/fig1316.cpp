#include <iostream>
using namespace std;

struct Coordinates {
   int x;
   int y;
};
void set(Coordinates *p, int a, int b)
{
   p -> x = a;
   p -> y = b;
}
void display(Coordinates *p)
{
   cout << "x = " << p -> x << endl;
   cout << "y = " << p -> y << endl;
}
int main()
{
   Coordinates c1;
   Coordinates c2;
   set(&c1, 1, 2);        // access c1 through set function
   set(&c2, 3, 4);        // access c2 through set function
   display(&c1);          // access c1 through display function
   display(&c2);          // access c2 through display function
   c1.y = 22;             // access c1 directly
   display(&c1);          // access c1 through display function
   return 0;
}
