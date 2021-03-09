#include <iostream>
using namespace std;

int y;
void ref(int &x)     // & signals the reference mechanism
{
     x = x + 5;
}

void vr(int $x)      // $ signals the value-result mechanism
{
     x = x + 5;
}

void v(int x)        // just x signals the value mechanism
{
     x = x + 5;
}

int main()
{
     y = 1;
     ref(y);
     cout << "y = " << y << endl;
     y = 1;
     vr(y);
     cout << "y = " << y << endl;
     y = 1;
     v(y);
     cout << "y = " << y << endl;
}
